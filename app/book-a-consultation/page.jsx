import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const Bookaconsultation = () => {
  return (
    <div>
      <Navbar />
      <header className="relative text-white w-full h-[300px] bg-gray-800 flex items-center justify-center px-4">
        <h1 className="relative z-[2] text-4xl font-medium">
          Book a Consultation
        </h1>
        <Image
          src="/images/image-6.jpg"
          width={400}
          height={300}
          alt=""
          className="absolute w-full h-full object-cover z-[1]"
        />
      </header>

      {/* <div className="px-4 grid gap-2 bg-lime-100 pb-5 mb-[50px]">
        <h1 className="mt-5 text-2xl pb-4">
          Welcome to{" Mo Miche’s "}World of Special Occasions!
        </h1>
        <p>
          We are a cross-continental brand that dresses women with confidence
          and boldness. We are masters at seamlessly balancing femininity with
          strength and are known for our handcrafted custom pieces. Everyone who
          wears Mo Miche feels and looks their best in our signature silhouette.{" "}
        </p>
        <p>
          Our mission is to empower women through clothes by preserving heritage
          and supporting the local community.
        </p>
        <p>Thank you for your interest in becoming a Mo Miche WOMAN!</p>
      </div>

      <div className="mt-8 px-4 grid gap-2">
        <h3 className="text-2xl font-medium">PRE-CONSULTATION</h3>
        <p>{"You’ve"} made the decision to become a Mo Miche WOMAN!</p>
        <p>
          Bespoke pieces are central to the Mo Miche brand; we undertake special
          orders inspired by you and make your dreams a reality no matter the
          occasion.
        </p>
        <p>
          We cannot wait to get you ready for your celebration, we are excited
          to take this step and go on this journey with you.
        </p>

        <p>
          We cannot wait to get you ready for your celebration, we are excited
          to take this step and go on this journey with you.
        </p>
        <p>
          Once you have chosen the date for your appointment you will be asked
          to fill in the form and redirected to the checkout page to pay the
          $100 fee for the consultation.
        </p>
      </div>

      <div className="mt-10">
        <span className="w-full h-[300px] bg-gray-100 flex "></span>

        <div className="px-4 mt-5">
          <h4 className="text-2xl font-medium mt-5">
            Virtual Consultation 40 min
          </h4>
          <p className="text-xl font-medium pb-10">$100.00</p>

          <p>
            Are you ready to stun the world at your next event? We accompany our
            clients through every moment of their life, creating a Mo Miche fit
            just for you.
          </p>
          <p className="mt-5">
            Web conferencing details provided upon confirmation.
          </p>

          <button className="mt-5 border border-gray-900 w-full text-gray-900 py-2">
            Book Now
          </button>
        </div>
      </div>

      <div className="mt-10">
        <div className="px-4 mt-5">
          <h4 className="text-2xl font-medium mt-5">
            Virtual Consultation 40 min
          </h4>
          <p className="text-xl font-medium pb-10">$100.00</p>

          <p>
            Are you ready to stun the world at your next event? We accompany our
            clients through every moment of their life, creating a Mo Miche fit
            just for you.
          </p>
          <p className="mt-5">
            Web conferencing details provided upon confirmation.
          </p>

          <button className="mt-5 border border-gray-900 w-full text-gray-900 py-2">
            Book Now
          </button>
        </div>
      </div>
      <div className="mt-10">
        <span className="w-full h-[300px] bg-gray-100 flex "></span>

        <div className="px-4 mt-5">
          <h4 className="text-2xl font-medium mt-5">
            Virtual Consultation 40 min
          </h4>
          <p className="text-xl font-medium pb-10">$100.00</p>

          <p>
            Are you ready to stun the world at your next event? We accompany our
            clients through every moment of their life, creating a Mo Miche fit
            just for you.
          </p>
          <p className="mt-5">
            Web conferencing details provided upon confirmation.
          </p>

          <button className="mt-5 border border-gray-900 w-full text-gray-900 py-2">
            Book Now
          </button>
        </div>
      </div> */}
      <FAQ />
    </div>
  );
};

export default Bookaconsultation;
