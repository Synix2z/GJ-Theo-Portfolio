type TitleProps = {
  text: string;
  id: string;
};

export default function Title({ text, id }: TitleProps) {
  return (
    <div id={id} className="scroll-mt-[150px] m-10 flex justify-center">
      <div className="relative w-fit pb-4">
        <h2 className="text-center font-syne text-lg text-white min-[700px]:text-[25px] lg:text-3xl">
          {text}
        </h2>

        <div className="absolute bottom-0 left-1/2 flex w-[150%] -translate-x-1/2 items-center gap-2.5 min-[700px]:w-[200%] lg:w-[250%]">
          <div className="h-0.5 flex-1 bg-white" />
          <div className="size-2.5 rounded-full bg-violet-400" />
          <div className="h-0.5 flex-1 bg-white" />
        </div>
      </div>
    </div>
  );
}
