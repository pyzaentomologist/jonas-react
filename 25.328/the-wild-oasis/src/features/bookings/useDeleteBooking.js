import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingRecord} from "../../services/apiBookings";
import { toast } from "react-hot-toast";
export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBookingRecord,
    onSuccess: () => {
      toast.success(`Booking successfully deleted`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteBooking, isDeleting };
}
