import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending: isSigningUp } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success("Successfully signed up, please verify your email");
    },
  });

  return {
    signup,
    isSigningUp,
  };
}
