import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isPending: isChecking } = useMutation({
    mutationFn: ({ bookingId, breakfast }) => {
      return updateBooking(bookingId, {
        isPaid: true,
        status: "checked-in",
        ...breakfast,
      });
    },
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} checked in successfully`);
      queryClient.invalidateQueries({
        active: true,
      });
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return {
    checkin,
    isChecking,
  };
}
