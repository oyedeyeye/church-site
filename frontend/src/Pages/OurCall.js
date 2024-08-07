import React from "react";
// import Navbar from '../component/Navbar/Navbar'
// import Navbar2 from '../component/Navbar2'
import Footer from "../component/Footer/Footer";
import Naavbar from "../component/Navbar/Naavbar";

function OurCall() {
  return (
    <div className="best">
      <Naavbar />

      <div
        className="bg-blue-900  border-b-8 border-white"
        style={{ backgroundColor: "#02336C" }}
      >
        <nav className="flex justify-center items-center py-28">
          <h1 className="text-white text-3xl font-bold">OUR CALL</h1>
        </nav>
      </div>
      <main>
        <br />
        <br />
        <div className="container py-4">
          <div className="row align-items-md-stretch">
            <div className="col-md-12">
              <div
                className="h-100 p-5 text-black best rounded-3"
                style={{ fontWeight: 400, fontSize: 20 }}
              >
                <h2 style={{ fontSize: "30px" }}>OUR VISION</h2>
                <p>
                  To deliver people from bondage of the devil, for them to
                  fufill God's purpose and make the kingdom of God at the end of
                  their sojourn here on earth.
                </p>
                <br />
                <br />
                <h2 style={{ fontSize: "30px" }}>OUR MISSION</h2>
                <p>
                  As encapsulated in the logo. The mission is to use the power
                  of the Holy Spirit, Authority of the word of God, effectual
                  prayers, loving fellowship, aggresive evangelism and apostolic
                  order to develop believers who will be ambassadors of Jesus
                  Christ across the globe.
                </p>
                <br />
                <br />
                <h2 style={{ fontSize: "30px" }}>OUR BELIEFS & TEACHINGS</h2>
                <p>
                  We believe in:
                  <ol
                    style={{
                      fontWeight: 400,
                      fontSize: "24px",
                      lineHeight: "36px",
                      paddingLeft: "64px",
                      listStyleType: "square",
                    }}
                  >
                    <li style={{ marginBottom: "10px" }}>
                      Salvation experience by giving one's life to Jesus Christ
                      through open confession. John 3:1-16; Acts 4:12; Roman
                      5:1; John 14:6; I Corinthians 12:13.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Christ's virgin birth, His sinless life, atoning death,
                      triumphant resrrection, His intercession, second coming
                      and millennial reign. Isaiah 7:14-15.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Baptism of those who believe in Jesus Christ by immersion
                      in water in the name of the Father, and of the Son, and of
                      the Holy Spirit. Mathew 28:19; Mark 16:15-16.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Holy Spirit's baptism for believers with manifestation of
                      all His signs and gifts. Acts 1:8; 2:1-4; 39:39; I
                      Corinthians 12:1-15.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Communion of saints with Jesus Christ by feeding on His
                      body and blood at the Lord's table. Mathew 26:26-30; John
                      6:53-58; I Corinthians 11:23-33.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Submission to order and church authority. John 1:12-13;
                      Luke 10:1; Mathew 8:5-10; Mark 16:15.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Holy Matrimony according to the will of God - One man to
                      one wife. Mathew 19:3-9.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Moderation in all that we do as Christians. Phillipians
                      4:5; I Thesallonians 4:11-12; I Timothy 6:8; Hebrew 13:5.
                    </li>
                  </ol>
                </p>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default OurCall;
