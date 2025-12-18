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
        <span style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          color: "#0047AB",
          fontFamily: "var(--tp-ff-gelder)"
        }}>
          {item.name}
        </span><br />
        <span style={{
          fontSize: "1rem",
          fontWeight: "400",
          color: "#fff",
          fontFamily: "var(--tp-ff-body)"
        }}>
          {item.designation}
        </span>
      </div>
    </div>
  );
}
