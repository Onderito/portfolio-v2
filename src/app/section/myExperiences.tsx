import React from "react";
export default function MyExperiences() {
  return (
    <section className="p-4 mt-10">
      <h2 className="text-[32px] font-crimson">My experiences</h2>
      <div className="mt-8 flex flex-col gap-6">
        <h3 className="text-[24px] font-crimson">
          Front end developer at{" "}
          <span className="font-fredoka font-semibold rounded-xl bg-[#0B66C2]/20 p-1 px-2 text-[28px] text-[#50A7FF] inline-block -rotate-4 ">
            DevCSI
          </span>
          <p className="text-[#B5B5B5] text-[20px] italic">
            2023 - 2024 (6 months){" "}
          </p>
        </h3>
        <h3 className="text-[26px] font-crimson">
          Full stack developer at{" "}
          <span className="font-fredoka font-semibold rounded-xl bg-[#FF946D]/20 p-1 px-2  text-[28px] text-[#FF946E] inline-block -rotate-4">
            Sealocker
          </span>
          <p className="text-[#B5B5B5] text-[20px] italic">
            2023 - 2024 (6 months){" "}
          </p>
        </h3>
        <h3 className="text-[26px] font-crimson">
          Front end developer at{" "}
          <span className="font-fredoka font-semibold rounded-xl bg-[#0B66C2]/20 p-1 px-2  text-[28px] text-[#50A7FF] inline-block -rotate-4">
            Ubby
          </span>
          <p className="text-[#B5B5B5] italic text-[20px]">
            2024 - 2025 (freelance)
          </p>
        </h3>
      </div>
    </section>
  );
}
