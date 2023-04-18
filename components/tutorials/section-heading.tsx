type Props = {
  heading: string;
};

export default function SectionHeading({ heading }: Props) {
  return (
    <div className="border-b border-gray-200 pb-5 my-5">
      <h3 className="text-xl font-semibold leading-6 text-gray-900">
        {heading}
      </h3>
    </div>
  );
}
