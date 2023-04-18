type Props = {
  heading: string;
};

export default function H3({ heading }: Props) {
  return (<>
  <br/>
    <span className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <span className="text-base font-semibold leading-6 text-gray-900">
        {heading}
      </span>
    </span>
    <br/>
    </>
  );
}
