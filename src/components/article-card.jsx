import React from "react";
import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

export function ArticleCard({ img, title, desc }) {
  return (
    <>
      <a
        href="#"
        aria-label="View Item"
        className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
      >
        <div className="flex flex-col h-full">
          <img
            src={img}
            className="object-cover w-full h-48"
            alt=""
          />
          <div className="flex-grow border border-t-0 rounded-b">
            <div className="p-5">
              <h6 className="mb-2 font-semibold leading-5">
                {title}
              </h6>
              <p className="text-sm text-gray-900">
                {desc}
              </p>
            </div>
          </div>
        </div>
      </a>

    </>
  );
}

export default ArticleCard;
