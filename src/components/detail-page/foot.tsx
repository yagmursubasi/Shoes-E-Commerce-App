import type { FC } from "react";
import type { Shoe } from "../../types";
import DOMPurify from "dompurify";

interface FootProps {
  item: Shoe;
}

const Foot: FC<FootProps> = ({ item }) => {
  return (
    <div>
      <div className="flex flex-col gap-4 text-white">
        <div className="flex gap-4">
          <button className="flex-1 p-4 rounded-lg bg-black hover:bg-gray-800 cursor-pointer">
            Sepete Ekle
          </button>
          <button className="bg-black p-4 rounded-lg hover:bg-gray-800 cursor-pointer">
            <img src="/heart.svg" />
          </button>
        </div>
        <button className="bg-my-blue p-4 rounded-lg hover:bg-[#7b96ff] cursor-pointer">
          Hemen Satın Al
        </button>
      </div>
      <h2 className="font-semibold mt-8 mb-2 text-[24px] text-dark-gray ">
        Bu ürün hakkında
      </h2>

      <p
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(item.description ?? ""),
        }}
      ></p>
    </div>
  );
};

export default Foot;
// xss saldırıalarına karşı backend'den gelen html içeriğini doğrudan dangerouslySetInnerHTML ile eklemek risklidir.Bu nedenle DOMPurify ilesanitize edilmiştir.
// sanitize metodu, HTML içeriğindeki potansiyel zararlı kodları temizler ve güvenli hale getirir.
