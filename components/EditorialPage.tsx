import heroImage from "@/public/archivephoto.jpg"
import EditImage from "./EditImage"
import Image from "next/image"


export default function EditorialPage() {
  return (
    <section>
      <div className="flex flex-col items-center mt-25">
     <EditImage image={heroImage} title={'photo image'} desc={'description of photo above'} />
      <EditImage image={heroImage} title={'photo image'} desc={'description of photo above'} />
        <Image
          src={heroImage}
          alt="inventory collection"
          width={1800}
          className="rounded-full min-h-150 h-100 mb-20 md:h-200 lg:h-300 xl:h-400 2xl:h-500"
        />
       <EditImage image={heroImage} title={'photo image'} desc={'description of photo above'} />
       </div>
    </section>
  );
}
