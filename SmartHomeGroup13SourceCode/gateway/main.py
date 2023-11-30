from yolobit import *
button_a.on_pressed = None
button_b.on_pressed = None
button_a.on_pressed_ab = button_b.on_pressed_ab = -1
from aiot_hcsr04 import HCSR04
from mqtt import *
from aiot_rgbled import RGBLed
from machine import Pin, SoftI2C
from aiot_dht20 import DHT20
import time

def on_mqtt_message_receive_callback__control_fan_(control_fan):
  global get_people_detect, count, get_temp, control_lamp, get_humi, get_light, control_door
  print(control_fan, end =' ')
  control_fan = int(control_fan)
  pin14.write_analog(round(translate(control_fan, 0, 100, 0, 1023)))

def on_mqtt_message_receive_callback__control_door_(control_door):
  global get_people_detect, count, control_fan, get_temp, control_lamp, get_humi, get_light
  print(control_door, end =' ')
  control_door = int(control_door)
  if control_door == 0:
    pin4.servo_write(0)
  else:
    pin4.servo_write(180)

tiny_rgb = RGBLed(pin10.pin, 4)

def on_mqtt_message_receive_callback__control_lamp_(control_lamp):
  global get_people_detect, count, control_fan, get_temp, get_humi, get_light, control_door
  print(control_lamp, end =' ')
  control_lamp = int(control_lamp)
  if control_lamp == 0:
    tiny_rgb.show(0, hex_to_rgb('#000000'))
  else:
    tiny_rgb.show(0, hex_to_rgb('#ffffff'))

aiot_dht20 = DHT20(SoftI2C(scl=Pin(22), sda=Pin(21)))

if True:
  display.scroll('hi')
  display.set_all('#4b0082')
  count = 0
  control_fan = 0
  control_lamp = 0
  aiot_ultrasonic = HCSR04(trigger_pin=pin3.pin, echo_pin=pin6.pin)
  get_people_detect = 0
  mqtt.connect_wifi('pagoda wifi', '12345678')
  mqtt.connect_broker(server='io.adafruit.com', port=1883, username='khoitruong9802', password='aio_dlCD05bUNso6tsrtE1PO8zubDtXg')
  mqtt.on_receive_message('control-fan', on_mqtt_message_receive_callback__control_fan_)
  mqtt.on_receive_message('control-door', on_mqtt_message_receive_callback__control_door_)
  mqtt.on_receive_message('control-lamp', on_mqtt_message_receive_callback__control_lamp_)

while True:
  count = (count if isinstance(count, (int, float)) else 0) + 1
  if count >= 600:
    count = 0
    get_temp = aiot_dht20.dht20_temperature()
    get_humi = aiot_dht20.dht20_humidity()
    get_light = round(translate((pin0.read_analog()), 0, 4095, 0, 100))
    get_people_detect = 0
    if aiot_ultrasonic.distance_cm() < 20:
      get_people_detect = 1
    mqtt.publish('get-temp', get_temp)
    mqtt.publish('get-humi', get_humi)
    mqtt.publish('get-light', get_light)
    mqtt.publish('get-people-detect', get_people_detect)
  if button_a.is_pressed():
    print('ButtonA', end =' ')
    if control_fan == 0:
      pin14.write_analog(round(translate(70, 0, 100, 0, 1023)))
      control_fan = 70
      mqtt.publish('control-fan', '70')
    else:
      pin14.write_analog(round(translate(0, 0, 100, 0, 1023)))
      control_fan = 0
      mqtt.publish('control-fan', '0')
  if button_b.is_pressed():
    print('ButtonB', end =' ')
    if control_lamp == 0:
      tiny_rgb.show(0, hex_to_rgb('#ffffff'))
      control_lamp = 1
      mqtt.publish('control-lamp', '1')
    else:
      tiny_rgb.show(0, hex_to_rgb('#000000'))
      control_lamp = 0
      mqtt.publish('control-lamp', '0')
  mqtt.check_message()
  time.sleep_ms(50)
