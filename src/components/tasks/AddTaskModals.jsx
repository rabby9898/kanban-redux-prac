import { useForm } from "react-hook-form";
import MyModal from "../../ui/Modal";

const AddTaskModals = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    onCancel();
  };
  const onCancel = () => {
    reset();
    setIsOpen(false);
  };
  return (
    <div>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title="Here is your task">
        <div className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <form action="#" method="POST" onClick={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                placeholder="John Doe"
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                placeholder="john@example.com"
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                {...register("message")}
                rows="4"
                placeholder="How can we help you?"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <div>
              <div>
                <button
                  type="submit"
                  onClick={() => onCancel()}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-white focus:outline-none focus:shadow-outline-blue"
                >
                  Cancel
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </MyModal>
    </div>
  );
};

export default AddTaskModals;
