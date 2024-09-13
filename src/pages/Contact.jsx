import { Button } from "@material-tailwind/react";
import React, { useRef } from "react";
import { useState } from "react";

const Contact = () => {
  const years = [1990, 1991, 1992, 1993];

  const [data, setdata] = useState(years);
  const some = useRef();
  const deleteNumber = (i) => {
    const newData = data.filter((item, id) => id !== i);
    setdata(newData);
  };

  const jumpToH2 = () => {
    some.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="mt-10">
      <Button onClick={jumpToH2}>useRef</Button>
      <div>
        {data.map((year, i) => (
          <div key={i} className="flex justify-around space-y-2">
            <h2
              className={`${
                i === 0 ? "bg-blue-800 rounded-md  text-white" : "bg-red-600 "
              } m-1 w-[200px] text-center`}
            >
              {`${i === 0 ? year + 100 : year}`}
            </h2>
            <button onClick={() => deleteNumber(i)}>X</button>
          </div>
        ))}
      </div>

      {/* useRef */}
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          amet nobis qui laudantium accusamus impedit molestias doloribus
          distinctio debitis esse illum soluta, eos adipisci porro mollitia
          dicta vel nam cumque ipsum. Earum dignissimos incidunt harum. Dicta
          minima error quo quidem incidunt doloribus tempora repellat deserunt
          qui et nulla temporibus reprehenderit inventore adipisci fugiat
          tenetur corporis quod ea perspiciatis nisi voluptatem dolor quos,
          laboriosam sed. Et aperiam voluptas reprehenderit quibusdam natus
          eaque adipisci. Quod similique nihil sed cum perspiciatis temporibus
          voluptates. Odit alias rem explicabo molestiae ratione, corrupti
          numquam voluptates. Voluptas pariatur impedit amet, neque magni
          dignissimos exercitationem repudiandae in illum quo harum excepturi
          sapiente consectetur aperiam. Nostrum nulla accusantium perspiciatis
          numquam praesentium ipsam consectetur repudiandae dolor? Quasi animi
          explicabo minima tenetur iusto temporibus doloremque vitae placeat,
          nulla eum expedita illum est molestiae nesciunt, vero consequatur
          deserunt facere repudiandae excepturi et deleniti enim quod magnam?
          Modi soluta at omnis similique sapiente magnam aliquid minima,
          mollitia corrupti! Placeat quisquam dolorum amet veritatis suscipit,
          ullam eaque explicabo sapiente aperiam exercitationem doloribus magni
          obcaecati eligendi eos voluptas temporibus facere pariatur ducimus
          nisi nam voluptatum mollitia asperiores labore. Suscipit laborum sint
          numquam, eaque magni blanditiis asperiores culpa tempora dolores,
          obcaecati nemo vel tempore illo neque, a officia similique? Facere
          eius, provident eaque culpa, dolorum ad, voluptas hic repudiandae
          velit ab expedita est incidunt? Minus officiis, doloribus obcaecati
          velit dolorem voluptatibus eligendi maxime sit hic accusantium!
          Tempore, eveniet. Quae, excepturi non repellat doloremque laudantium
          magnam debitis, pariatur illum accusantium autem placeat quia quam,
          deserunt officiis ratione dolorem exercitationem dolores quis quo
          magni animi ipsa unde amet fugit? Nihil porro sapiente maiores sequi,
          delectus provident laudantium animi veniam expedita et? Eum
          dignissimos quam id, fuga blanditiis eveniet natus quis illum. At
          totam alias nulla voluptate cumque saepe mollitia recusandae vel
          fugiat numquam. Enim aliquid debitis laborum iste ea iusto eum
          veritatis saepe error voluptatum iure itaque, voluptates impedit?
          Quis, harum delectus iusto ratione velit fugit, non, inventore sequi
          soluta aspernatur necessitatibus. Recusandae natus illum nam sequi hic
          asperiores deleniti sint odit dolor sit error molestiae voluptatem
          perspiciatis, cupiditate labore, maiores quidem, necessitatibus atque
          provident molestias numquam. Voluptas hic vitae dicta porro deserunt
          eaque eius fuga soluta, voluptatibus dolores omnis molestias ipsam
          adipisci temporibus odit eos aperiam nulla officia excepturi atque.
          Facere quisquam velit quos accusamus enim odio. Nulla nesciunt iusto
          adipisci officiis sequi quis autem recusandae atque, eligendi enim ab
          beatae quod deserunt dicta explicabo fugit temporibus repellat
          perferendis! Ratione similique corrupti voluptatem optio quod at,
          tempore cupiditate incidunt inventore consectetur reiciendis,
          doloremque culpa aperiam fuga iste nam error quam iure ex odit nisi
          excepturi, recusandae rem expedita. Unde eos molestiae soluta cumque
          error! Dolore iusto possimus exercitationem, voluptate, perferendis
          quod porro reiciendis ea nesciunt incidunt saepe officiis, vero amet
          aliquam eius assumenda veniam a quas numquam molestiae hic laborum
          culpa inventore reprehenderit? Eos molestias, omnis nesciunt, eaque
          explicabo placeat, recusandae quibusdam at repudiandae itaque
          obcaecati rem distinctio fuga corrupti a quisquam illum nam. Optio
          nihil odit explicabo cumque necessitatibus. Sint nobis culpa
          reprehenderit aut modi vero quaerat, officiis excepturi ipsam eum rem
          laboriosam repellendus tempore qui, eos incidunt id consequuntur
          impedit quos repudiandae libero rerum soluta assumenda distinctio?
          Deserunt expedita ipsa nam beatae consequatur. Repellat voluptates
          dolor autem inventore. Dolor corrupti explicabo corporis! Sunt
          repudiandae deleniti totam explicabo voluptates ratione, impedit ullam
          illum rerum laborum vero eveniet, quia doloribus dicta accusamus
          consectetur fuga facere? Hic modi aperiam harum facilis error quas sed
          accusamus delectus veniam adipisci voluptates maxime qui, porro
          reprehenderit unde autem mollitia aut dolorum maiores. Consequatur
          sint corrupti voluptatibus voluptates quaerat recusandae iste,
          asperiores optio expedita quo? Fuga odio debitis totam, officiis
          reiciendis dolor autem commodi tempora, consequatur sed ea delectus
          aliquid dicta recusandae eaque eius accusamus vel adipisci iusto
          alias! Blanditiis eius aut commodi amet eligendi rerum, odit
          exercitationem nulla tenetur facilis recusandae animi ullam, ut alias
          ex assumenda minima tempore. Dignissimos iusto mollitia esse labore,
          beatae animi veritatis dolorem vero, deleniti quia at molestiae?
          Temporibus provident quis inventore dicta, rem delectus autem, ut
          suscipit, sapiente eos quae quidem! Vitae tempore veritatis debitis
          minima non voluptates doloribus provident, atque cupiditate, quis
          fugit aspernatur ipsa dolorem mollitia quaerat architecto. Error
          debitis, fuga suscipit dicta esse itaque dolorem quae tempore eligendi
          maxime sed expedita placeat aperiam cupiditate, iste est consequuntur
          qui nostrum officia explicabo ducimus quas assumenda laboriosam
          quidem. Sunt nostrum, animi cupiditate nihil nisi odio reiciendis
          veritatis. Molestias, temporibus. Nobis beatae dolor temporibus. Sed
          distinctio voluptate voluptatum quasi saepe. Eaque rem dolorum, in
          doloribus velit dicta quisquam quia earum, voluptatibus dignissimos
          non consectetur? Deleniti earum nesciunt suscipit sint est assumenda
          adipisci quaerat delectus, fugit animi? Porro nobis minus repudiandae
          omnis perspiciatis blanditiis libero labore aliquid maxime deleniti
          laudantium odio quasi sunt obcaecati iste, voluptatum, voluptates ea.
          Ab vero voluptate architecto suscipit velit ut laudantium impedit
          veritatis porro libero labore, nemo mollitia soluta neque quo rerum,
          optio facere aliquam dignissimos earum est voluptatum praesentium!
          Iure doloribus saepe laudantium illo error, modi nam voluptatibus
          impedit necessitatibus autem culpa expedita sint, maxime laboriosam
          veritatis! Sit, maxime exercitationem. Quos quas fugiat reiciendis
          quia ut quasi nulla. Aut maiores perferendis veniam repudiandae,
          doloribus incidunt minima tenetur reiciendis doloremque. Et minus
          voluptatem itaque minima ad! Natus recusandae similique delectus
          beatae. Ipsum veritatis repudiandae excepturi optio autem quas
          perspiciatis! Sunt omnis distinctio facilis in, quod, non odio
          cupiditate neque fugiat aut veritatis. Eveniet tempora alias maxime
          dignissimos beatae quis praesentium, blanditiis unde debitis, ut
          sapiente veritatis perspiciatis accusamus quam animi, repellat rem?
          Amet molestias quia vero temporibus consequatur debitis. Laboriosam
          voluptatibus sed quod cumque facere, cupiditate numquam officia velit!
          Quas eum illo obcaecati aut at deleniti vitae cumque, voluptatibus
          accusamus aliquam fugit facilis voluptatem, sequi quam necessitatibus
          magnam. Quia iusto cupiditate atque quos nesciunt, a pariatur saepe
          magnam? Suscipit libero eius vero dolorem hic autem consectetur
          blanditiis quia deleniti facere, aliquid sint commodi molestiae
          officiis soluta cumque corrupti, obcaecati pariatur eum impedit
          laudantium! Debitis ratione, impedit culpa temporibus vel consequatur
          adipisci beatae hic, maxime ea inventore eveniet dolore eligendi sequi
          quisquam optio deserunt totam, ullam voluptatibus sed voluptatum!
          Consequuntur, inventore minus!
        </p>
        <h1 ref={some} className="bg-red-900">
          welcome to my contact page
        </h1>
      </div>
    </div>
  );
};

export default Contact;
