type Props = {
  name: string;
  content: string;
};

export function Testimonial({ name, content }: Props) {
  return (
    <div className="bg-zinc-800 p-8 lg:min-w-[500px] min-w-[400px] max-w-[600px] rounded-md lg:text-xl">
      <div className="flex items-center space-x-4">
        <div className='h-14 w-14 bg-zinc-900 rounded-full'></div>
        <div>{name}</div>
      </div>

      <div className='mt-4'>{content}</div>
    </div>
  );
}
