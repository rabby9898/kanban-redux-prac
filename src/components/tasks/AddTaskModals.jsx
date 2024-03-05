import MyModal from "../../ui/Modal";

const AddTaskModals = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title="Here is your task">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          aperiam atque inventore dolores itaque aliquam ad temporibus animi
          consequuntur veniam.
        </p>
      </MyModal>
    </div>
  );
};

export default AddTaskModals;
