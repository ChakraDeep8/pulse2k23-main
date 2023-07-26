import React, { useState, useEffect, useMemo } from "react";
import "./Members.css";
import member1 from "../../members/Sourav Ghosh (Small).jpg";
import member2 from "../../members/Ahelee Mukherjee (Small).jpg";
import member3 from "../../members/Subhodeep Neogi (Small).jpg";
import member4 from "../../members/Sreemoyee Chatterjee (Small).jpg";
import member5 from "../../members/Chayan Gupta (Small).jpg";
import member6 from "../../members/Diptanshu Ghosh (Small).jpg";
import member7 from "../../members/Hrishika (Small).jpg";
import member8 from "../../members/Shubham Gupta (Small).jpg";
import member9 from "../../members/Lalita Bhattacharya (Small).jpg";
import member10 from "../../members/Meghna Si (Small).jpg";
import member11 from "../../members/Shreyan Chowdhury (Small).jpg";
import member12 from "../../members/Sanjana Shaw (Small).jpg";
import member13 from "../../members/Riya Karmakar (Small).jpg";
import member14 from "../../members/Deep Chakraborty (Small).jpg";
import member15 from "../../members/Supratim Dey (Small).jpg";
import member16 from "../../members/Kallol Mondal (Small).jpg";
import member17 from "../../members/Sayantan Karmakar (Small).jpg";
import member18 from "../../members/Avantika Roy (Small).jpg";

const Members = () => {
  const membersArr = useMemo(
    () => [
      { id: 1, name: "Sourav Ghosh", image: member1, whatsappLink: "https://wa.me/+919123737575" },
      { id: 2, name: "Ahelee Mukherjee", image: member2, whatsappLink: "https://wa.me/+918274819991" },
      { id: 3, name: "Subhodeep Neogi", image: member3, whatsappLink: "https://wa.me/+918337081510" },
      { id: 4, name: "Sreemoyee Chatterjee", image: member4, whatsappLink: "https://wa.me/+918100065320" },
      { id: 5, name: "Chayan Gupta", image: member5, whatsappLink: "https://wa.me/+919330066202" },
      { id: 6, name: "Diptanshu Ghosh", image: member6, whatsappLink: "https://wa.me/+917364074601" },
      { id: 7, name: "Hrishika", image: member7, whatsappLink: "https://wa.me/+917564056032" },
      { id: 8, name: "Shubham Gupta", image: member8, whatsappLink: "https://wa.me/+919674644518" },
      { id: 9, name: "Lalita Bhattacharya", image: member9, whatsappLink: "https://wa.me/+918981511092" },
      { id: 10, name: "Meghna Si", image: member10, whatsappLink: "https://wa.me/+919748638473" },
      { id: 11, name: "Shreyan Pal Chowdhury", image: member11, whatsappLink: "https://wa.me/+918420231825" },
      { id: 12, name: "Sanjana Shaw", image: member12, whatsappLink: "https://wa.me/+918240934380" },
      { id: 13, name: "Riya Karmakar", image: member13, whatsappLink: "https://wa.me/+917602372605" },
      { id: 14, name: "Deep Chakraborty", image: member14, whatsappLink: "https://wa.me/+916291907144" },
      { id: 15, name: "Supratim De", image: member15, whatsappLink: "https://wa.me/+919330431771" },
      { id: 16, name: "Kallol Mondal", image: member16, whatsappLink: "https://wa.me/+919064963090" },
      { id: 17, name: "Sayantan Karmakar", image: member17, whatsappLink: "https://wa.me/+919875532517" },
      { id: 18, name: "Avantika Roy", image: member18, whatsappLink: "https://wa.me/+916290755133" },
    ],
    []
  );

  const [startIndex, setStartIndex] = useState(0);
  const [visibleMembers, setVisibleMembers] = useState([]);

  useEffect(() => {
    let interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex === membersArr.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [membersArr]);

  useEffect(() => {
    const endIndex =
      startIndex + 5 < membersArr.length ? startIndex + 5 : membersArr.length;
    setVisibleMembers([
      ...membersArr.slice(startIndex, endIndex),
      ...(endIndex === membersArr.length
        ? membersArr.slice(0, 5 - (membersArr.length - startIndex))
        : []),
    ]);
  }, [startIndex, membersArr]);

  return (
    <div className="agenda section" id="agenda">
      <div className="agenda-content container">
        <div className="section-header">
          <div className="sub-title">ORGANIZERS</div>
          <div className="title">Pusle.exe 2K23</div>
        </div>
      <div className="members-container">
          <div className="members-wrapper">
            {visibleMembers.map((member) => (
              <div className="members-slide" key={member.id}>
                <img src={member.image} alt={member.name} />
                <p>{member.name}</p>
                <div className="cta-buttons">
                    <div className="tertiary-btn">
                        <a href={member.whatsappLink}>WhatsApp &gt;</a>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Members;
