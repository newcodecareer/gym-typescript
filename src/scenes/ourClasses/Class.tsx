type Props = {
  name: string;
  description?: string;
  image: string;
};

const overlayStyles = `absolute z-30 p-5 h-[380px] w-[450px] flex flex-col item-center
justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 
transition duration-500 hover:opacity-75`;
const Class = ({ name, description, image }: Props) => {
  return (
    <li className="relative w-[450px] h-[380px] inline-block mx-5">
      <div className={overlayStyles}>
        <p>{name}</p>
        <p>{description}</p>
      </div>
      <img src={image} alt={`${image}`} />
    </li>
  );
};

export default Class;
