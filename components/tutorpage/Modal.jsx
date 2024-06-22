import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { MultiSelect } from "@mantine/core";

const Popup = ({ tutor }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <section className="h-fit ">
      <Modal
        opened={opened}
        onClose={close}
        title={`Message to ${tutor.name}`}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <form action="" className="">
          <MultiSelect
            label="Course"
            placeholder="Select a course you want to learn"
            data={tutor.courses}
          />
         
         
         <div className="mt-2">
            <label htmlFor="email" className="font-semibold">
              Date
            </label>
            <input
              type="date"
              name=""
              id=""
              placeholder="Enter your student email"
              className="w-full px-3 py-1  border text-black/80 border-black/35 rounded-md outline-blue/40"
            />
          </div>

          <div className="mt-2">
            <label htmlFor="email" className="font-semibold">
              Time
            </label>
            <input
              type="time"
              name=""
              id=""
              placeholder="Enter your student email"
              className="w-full px-3 py-1  border text-black/80 border-black/35 rounded-md outline-blue/40"
            />
          </div>

          <div className="mt-4">
            <h1 className="font-semibold">
              How would you like to take a lesson?
            </h1>
            <div className="flex gap-3">
              <label htmlFor="online">
                <input type="radio" name="lesson" id="online" /> Online
              </label>
              <label htmlFor="in-person">
                <input type="radio" name="lesson" id="in-person" /> In-person
              </label>
            </div>
          </div>

          <div className="my-4">
            <h3 className="mb-2 font-semibold">
             Tell your tutor what you like to learn.
            </h3>
            <textarea
              name=""
              rows={4}
              id=""
              placeholder="What is your challenge in the course"
              className="w-full px-3 py-2 border text-black/80 border-black/25 rounded-md outline-blue/40"
            >
            </textarea>
          </div>


          <div>
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your student email"
              className="w-full px-3 py-1  border text-black/80 border-black/35 rounded-md outline-blue/40"
            />
          </div>

          <button
            type="submit"
            className="my-3 bg-blue border-2 font-semibold border-blue hover:text-black hover:bg-white text-white px-4 py-2 rounded-sm w-full trannsition-all duration-300"
          >
            Submit
          </button>
        </form>
      </Modal>

      <button onClick={open} styles={{ color: "#042085", fontWeight: "bold" }}>
        Book me
      </button>
    </section>
  );
};

export default Popup;
