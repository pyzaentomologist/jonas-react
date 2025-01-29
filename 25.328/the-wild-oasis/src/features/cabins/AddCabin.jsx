import { Button } from "../../ui/Button";
import { Modal } from "../../ui/Modal";
import { CreateCabinForm } from "./CreateCabinForm";

export function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}


// export function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   function handleCloseModal() {
//     setIsOpenModal(false);
//   }

//   return (
//     <>
//       <Button onClick={() => setIsOpenModal(true)}>Add new Cabin</Button>
//       {isOpenModal && (
//         <Modal onClose={handleCloseModal}>
//           <CreateCabinForm onCloseModal={handleCloseModal} />
//         </Modal>
//       )}
//     </>
//   );
// }
