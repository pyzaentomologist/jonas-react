import { useForm } from "react-hook-form"
import { Input } from "../../ui/Input";
import { FileInput } from "../../ui/FileInput";
import Form from "../../ui/Form";
import { Button } from "../../ui/Button";
import Textarea from "../../ui/Textarea";
import { FormRow } from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabin";
import { useUpdateCabin } from "./useUpdateCabin";

export function CreateCabinForm({ cabinToUpdate = {}, onCloseModal }) {
  const { id: updateId, ...updateValues } = cabinToUpdate;
  const isUpdateSession = Boolean(updateId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isUpdateSession ? updateValues : {},
  });
  const { errors } = formState;

  const { isLoading: isCreating, createCabin } = useCreateCabin();
  const { isLoading: isUpdating, updateCabin } = useUpdateCabin();

  const isWorking = isCreating || isUpdating;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isUpdateSession) {
      updateCabin(
        { newCabinData: { ...data, image: image }, id: updateId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          }
        }
      )
    }
    else createCabin({ ...data, image: image }, {
      onSuccess: () => {
        reset(); 
        onCloseModal?.();
    }});
  }

  const requiredMessage = "This field is required";

  return (
    <Form onSubmit={handleSubmit(onSubmit)} type={ onCloseModal ? "modal" : "regular"}>
      <FormRow error={errors?.name?.message} label="Cabin name">
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", { required: requiredMessage })}
        />
      </FormRow>

      <FormRow error={errors?.maxCapacity?.message} label="Maximum capacity">
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          defaultValue={0}
          {...register("maxCapacity", {
            required: requiredMessage,
            min: {
              value: 1,
              message: "Capacity suold be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow error={errors?.regularPrice?.message} label="Regular price">
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          defaultValue={0}
          {...register("regularPrice", {
            required: requiredMessage,
            min: {
              value: 1,
              message: "Price suold be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow error={errors?.discount?.message} label="Discount">
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: requiredMessage,
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be equal or less than regular price",
          })}
        />
      </FormRow>

      <FormRow
        error={errors?.description?.message}
        label="Description for website"
      >
        <Textarea
          type="number"
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register("description", { required: requiredMessage })}
        />
      </FormRow>

      <FormRow error={errors?.description?.message} label="Cabin photo">
        <FileInput
          id="image"
          disabled={isWorking}
          accept="image/*"
          {...register("image", {
            required: isUpdateSession ? false : requiredMessage,
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick={() => onCloseModal?.()}>
          Cancel
        </Button>
        <Button>{isUpdateSession ? "Update cabin" : "Create new cabin"}</Button>
      </FormRow>
    </Form>
  );
}
