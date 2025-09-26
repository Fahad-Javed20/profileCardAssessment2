type CardProps = {
  id: number;
  name: string;
  designation: string;
  rate: number;
  picture: string;
};

const Card = ({  name, designation, rate, picture }: CardProps) => {
  return(

    

 <div>

<div className="bg-white h-85 w-60">


<div
  className={`w-16 text-sm rounded-l-2xl pl-2 relative top-7 left-44 ${
    rate > 30 ? "bg-green-500" : "bg-yellow-500"
  }`}
>
  {rate}/hr
</div>



<div className="flex justify-center">
  <img className="size-24 rounded-full mt-10" src={picture} alt=""/>
</div>
<div className="flex flex-col items-center mt-6">
  <h1 className="text-2xl font-bold">{name}</h1>
  <hr className="my-1 border-t-3 border-blue-700 w-1/4 mx-auto"/>
  <h1 className="text-gray-500">{designation}</h1>
</div>
<div className="flex justify-center mt-8">
  <button className="bg-blue-600 text-white text-sm px-16 py-2 rounded-2xl">VIEW PROFILE</button>
</div>
</div>


 </div>

   );
};

export default Card;
