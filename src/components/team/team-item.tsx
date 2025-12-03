import React from "react";
import Image from "next/image";
import { ITeamDT } from "@/types/team-d-t";

// prop type
type IProps = {
  item: ITeamDT;
};

export default function TeamItem({ item }: IProps) {
  return (
    <div className="tp-team-item tp-hover-btn-wrapper marque fix mb-30">
      <div className="tp-hover-btn-item">
        <Image
          style={{ width: "auto", height: "auto" }}
          src={item.image}
          alt="team-img"
          width={375}
          height={464}
        />
      </div>
      <div className="tp-team-content">
        <span style={{ fontSize: "34px", fontWeight: "600", color: "#fff" }}>
          {item.name}
        </span><br/>
        <span style={{ fontSize: "18px", fontWeight: "600", color: "#fff" }}>
          {item.designation}
        </span>
      </div>
    </div>
  );
}
