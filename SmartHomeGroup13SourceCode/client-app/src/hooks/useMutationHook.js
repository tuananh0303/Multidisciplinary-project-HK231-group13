import { useMutation } from "@tanstack/react-query";

export const useMutationHooks = (fnCallback) => {
  const mutation = useMutation({
    mutationFn: fnCallback,
    // onError: (error) => {
    //   if (error.response) {
    //     // Kiểm tra dữ liệu phản hồi từ server và cập nhật trạng thái tương ứng
    //     const responseData = error.response.data;
    //     if (responseData && responseData.status === "ERR") {
    //       // Xử lý khi có lỗi từ phía server
    //       // Cập nhật isError thành true, và xử lý thông báo lỗi nếu cần
    //       mutation.isSuccess = false;
    //       mutation.isError = true;
    //     }
    //   }
    // },
  });
  return mutation;
};
