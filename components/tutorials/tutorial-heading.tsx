type Props = {
  heading: string;
};

export default function TutorialHeading({ heading }: Props) {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-4xl sm:tracking-tight">
          {heading}
        </h2>
      </div>
    </div>
  );
}
