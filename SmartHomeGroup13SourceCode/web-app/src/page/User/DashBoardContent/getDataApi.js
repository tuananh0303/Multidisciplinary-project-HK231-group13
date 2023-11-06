
export const getControlLampData = async (username, activeKey) => {
    try {
        const url = `https://io.adafruit.com/api/v2/${username}/feeds/control-lamp`;
        const response = await fetch(url, {
            headers: {
                'X-AIO-Key': activeKey,
            },
        });
        if (!response.ok) {
            throw new Error('Lỗi khi lấy dữ liệu từ Adafruit IO');
        }
        const data = await response.json();
        return data;
        } catch (error) {
            console.error(error);
            return null;
        }    
}

export const getControlFanData = async (username, activeKey) => {
    try {
        const url = `https://io.adafruit.com/api/v2/${username}/feeds/control-fan`;
        const response = await fetch(url, {
            headers: {
                'X-AIO-Key': activeKey,
            },
        });
        if (!response.ok) {
            throw new Error('Lỗi khi lấy dữ liệu từ Adafruit IO');
        }
        const data = await response.json();
        return data;
        } catch (error) {
            console.error(error);
            return null;
        }    
}

export const getControlDoorData = async (username, activeKey) => {
    try {
        const url = `https://io.adafruit.com/api/v2/${username}/feeds/control-door`;
        const response = await fetch(url, {
            headers: {
                'X-AIO-Key': activeKey,
            },
        });
        if (!response.ok) {
            throw new Error('Lỗi khi lấy dữ liệu từ Adafruit IO');
        }
        const data = await response.json();
        return data;
        } catch (error) {
            console.error(error);
            return null;
        }    
}

export const getLight = async (username, activeKey) => {
    try {
        const url = `https://io.adafruit.com/api/v2/${username}/feeds/get-light`;
        const response = await fetch(url, {
            headers: {
                'X-AIO-Key': activeKey,
            },
        });
        if (!response.ok) {
            throw new Error('Lỗi khi lấy dữ liệu từ Adafruit IO');
        }
        const data = await response.json();
        return data;
        } catch (error) {
            console.error(error);
            return null;
        }    
}
export const getTempData = async (username, activeKey) => {
    try {
        const url = `https://io.adafruit.com/api/v2/${username}/feeds/get-temp`;
        const response = await fetch(url, {
            headers: {
                'X-AIO-Key': activeKey,
            },
        });
        if (!response.ok) {
            throw new Error('Lỗi khi lấy dữ liệu từ Adafruit IO');
        }
        const data = await response.json();
        return data;
        } catch (error) {
            console.error(error);
            return null;
        }    
}
export const getHumidData = async (username, activeKey) => {
    try {
        const url = `https://io.adafruit.com/api/v2/${username}/feeds/get-humi`;
        const response = await fetch(url, {
            headers: {
                'X-AIO-Key': activeKey,
            },
        });
        if (!response.ok) {
            throw new Error('Lỗi khi lấy dữ liệu từ Adafruit IO');
        }
        const data = await response.json();
        return data;
        } catch (error) {
            console.error(error);
            return null;
        }    
}


