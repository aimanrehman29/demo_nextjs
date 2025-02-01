import Image from "next/image";
import React from "react";

const Coment = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="w-full bg-gray-100 p-4 rounded-lg">
        <div className="flex justify-start gap-4 ">
          <Image
            src="/images/image copy 10.png"
            alt="profile"
            width={80}
            height={80}
            className="rounded-full border-2 border-gray-300"
          />
          <h1 className="text-xl sm:text-2xl font-bold mt-4">Benjamin</h1>
        </div>

        <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-700 p-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore iure
          quam expedita saepe, odit eveniet sed consequatur praesentium ex velit
          voluptates eligendi et obcaecati modi veniam qui, vitae sequi laborum.
          Molestiae tempora quam ab quod temporibus vero vitae voluptate eius,
          facilis aliquam laborum ipsa iusto sapiente veniam sed reprehenderit
          perferendis totam aperiam tenetur nihil eligendi! Corporis repellat
          odit non voluptatibus? Ut, natus totam nobis sit perspiciatis
          consectetur dolorem quia, repudiandae, odio ratione excepturi nihil?
          Sed enim pariatur eos nihil voluptatibus, cumque in iste odio
          repellendus. Unde totam tenetur magni ut!
        </p>
      </div>
    </div>
  );
};

export default Coment;
