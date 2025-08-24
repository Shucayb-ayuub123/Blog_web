import image from "../img/speed_jpeg.jpeg";
import person from "../img/Person.jpg";
import edit from "../img/images.png";
import Delete from "../img/images (1).png";
import { Link } from "react-router-dom";
import Menu from "../compound/Menu";
const Single = () => {
  return (
    <div className="flex gap-10">
      <div className="flex-5 flex-col space-y-3 ">
        <img src={image} />
        <div className="flex justify-start items-center mt-1   space-x-2">
          <img src={person} alt="" className="w-16 h-16 rounded-4xl" />
          <div>
            <span className="font-bold text-sm">John</span>
            <p className="text-sm">Posted 2 days ago</p>
          </div>
          <div className="flex space-x-2">
            <Link to={"/write?edit=2"}>
              <img src={edit} className="w-6 cursor-pointer" alt="" />
            </Link>
            <img src={Delete} className="w-6 cursor-pointer" alt="" />
          </div>
        </div>

        <h1 className="text-4xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          laudantium repellat sint recusandae minima
        </h1>
        <p className="leading-8 text-lg ">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat perspiciatis magni quibusdam, dicta veritatis eligendi quam quo aspernatur inventore deserunt molestias facilis saepe repellendus odit reiciendis error. Fugiat, quis soluta!
         Earum laboriosam nostrum commodi vel consectetur dicta dolorem? Repellendus magnam, doloribus sapiente pariatur amet autem sint corporis praesentium excepturi temporibus soluta vel quos expedita, mollitia suscipit natus obcaecati ipsum in!
         Tenetur, autem earum! Repellat repellendus vel, <br></br> recusandae laboriosam perferendis ut iure aut quia harum aperiam perspiciatis itaque placeat quam, libero quis amet, sapiente explicabo unde nemo delectus mollitia illum. Excepturi.
         Magnam placeat accusamus cupiditate excepturi, debitis odit? Debitis eos illo, natus ipsa voluptates itaque velit minima optio, corrupti labore veritatis facilis non quia incidunt et? Adipisci similique minus quia non.<br></br>
         Molestiae explicabo eos asperiores assumenda sapiente provident. Ab ex porro cum veritatis, animi quos nostrum quasi magnam voluptatum nihil! Nihil quisquam, sit repellendus reprehenderit a dolorem! Placeat corrupti saepe modi?
         Ratione, nobis voluptate libero repellat optio vitae.<br></br> Similique vitae corporis molestias. Perferendis iusto velit veritatis, dolorum distinctio ipsum earum maxime et itaque libero placeat adipisci ipsam, labore minus fugiat qui.
         Laborum, autem. Eligendi soluta, nam perferendis saepe facere mollitia vel reiciendis perspiciatis aliquam magni natus, error necessitatibus nisi reprehenderit. Ex quidem quas eos dicta reiciendis nesciunt. Fugit commodi nisi saepe!
         Aliquid fugiat eum minima laborum.<br></br> Animi esse ducimus perspiciatis enim quasi voluptas debitis, at quo, adipisci optio impedit quod itaque quaerat quidem porro fuga dolorem sint doloremque vel placeat deserunt.
         Iste illum eligendi commodi et repellendus perferendis <br></br> similique in, rem aut esse fugit quam quod, quas saepe eos laudantium libero laborum temporibus mollitia beatae at minus. Est libero provident saepe.
         Tempora fugiat, ex repudiandae voluptate vitae itaque dolore, laborum error in dolorem ullam quibusdam exercitationem nesciunt dignissimos hic minima libero nostrum, eveniet odit aliquid voluptates corrupti praesentium.<br></br> Vitae, obcaecati aut.
         Nesciunt aperiam voluptates quam adipisci vero tempore dolorum, velit repudiandae eos. Hic quaerat nesciunt sit laborum quibusdam quas inventore eaque nam et? Aperiam rem maiores sequi quaerat eveniet sunt obcaecati?
         Dignissimos ipsam aut corrupti vitae placeat quaerat, <br></br> vero magnam dolor dolores neque natus explicabo consequatur distinctio cumque error ratione, voluptatum, ut quibusdam repudiandae quasi beatae maxime commodi? Neque, inventore ullam.
         Voluptatem omnis corporis nisi excepturi molestias laboriosam aliquam, dolorem, consectetur numquam animi, quos consequatur aliquid adipisci! Obcaecati at cumque accusantium sunt hic est mollitia corporis, debitis nihil aliquid, provident autem?
        </p>
      </div>

      <div className="flex-2"><Menu /></div>
    </div>
  );
};

export default Single;
