import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: async ({ email, password }) => {
      await loginApi({ email, password });
    },
    onSuccess: (user) => {
      // console.log(user);
      // not working well
      toast.success("Successfully logged in");
      queryClient.setQueryData(["user"], user?.user);
      navigate("/dashboard", { replace: true });
    },
  });
  return { login, isLoading };
}
