import React from 'react';
import Naavbar from '../component/Navbar/Naavbar';
import Footer from '../component/Footer/Footer';

function OurHistory() {
  return (
    <div>
      <Naavbar />
      <div className="bg-blue-900 border-b-8 border-white" style={{ backgroundColor: "#02336C" }}>
        <nav className="flex justify-center items-center py-8">
          <h1 className="text-white text-3xl font-bold">OUR HISTORY</h1>
        </nav>
      </div>
      <main>
        <div className="container mx-auto py-8">
        <div className="p-5 bg-white rounded-lg">
  <h2 className="text-3xl font-semibold text-blue-900 mb-4">HISTORY OF THE CHURCH</h2>
  <p className="text-2xl text-black-700 leading-relaxed">
    The Lord instructed us in 2011 to establish the church arm of the ministry. It was a challenging decision as our lives were deeply intertwined with CAC Chapel of Praise Akure, where I've been a member for ten years. In November 2013, the Lord revealed to me that I was not fulfilling my purpose. After careful consideration, I made the difficult decision to leave. This was a significant change, especially considering my family. However, we obeyed the Lord's guidance. On Wednesday, November 20, 2013, we commenced the Church arm of SEPCAM with my family and Reverend Enoch's family in a Bible study session at Plot 31-32, Ifelodun Community, along Akure-Ilesha Motorway, Akure Ondo State.
  </p>
  <p className="text-2xl text-black-700 leading-relaxed">
    The church formally commenced activities on Sunday, January 5, 2014, with the spiritual inauguration by Pastor J. J. Omotoso. Since then, the church has experienced remarkable growth. In 2017, SEPCAM (Ipinsa Assembly) opened its first branch following a successful three-day open-air Gospel crusade. Currently, both Ifelodun and Ipinsa assemblies attract 250 brethren each Sunday.
  </p>
  <p className="text-2xl text-black-700 leading-relaxed">
    The governance of the church is overseen by trustees, pastorate, ministers, workers, and the general assembly. Despite challenges, the church continues to thrive, guided by the grace of God.
  </p>
</div>
<div className="p-5 bg-white rounded-lg">
  <h2 className="text-3xl font-semibold text-blue-900 mb-4">THE SEVEN-FOLD COVENANT</h2>
  <h3 className="text-2xl font-semibold text-blue-900 mb-2">God's covenant with the household of SEPCAM</h3>
  <ul className="list-disc pl-5" style={{ paddingLeft: "64px", listStyleType: "square",}}>
    <li className="text-2xl text-black-700 leading-relaxed">
      <b>RIGHTEOUSNESS:</b> Isaiah 54:14, Proverb 14:34
    </li>
    <li className="text-2xl text-black-700 leading-relaxed">
      <b>LONGLIFE AND PRESERVATION:</b> Psalms 91:16, Isaiah 65:12-14
    </li>
    <li className="text-2xl text-black-700 leading-relaxed">
      <b>PEACE:</b> 2 Thessalonians 3:16, John 14:27, Ezekiel 34:25
    </li>
    <li className="text-2xl text-black-700 leading-relaxed">
      <b>SALT:</b> Nunbers 18:19, Mathew 5:13a
    </li>
    <li className="text-2xl text-black-700 leading-relaxed">
      <b>SECURITY:</b> Psalms 23:27, 27:1-5; 91
    </li>
    <li className="text-2xl text-black-700 leading-relaxed">
      <b>ABUNDANCE AND FRUITFULLNESS:</b> Genesis 1:27-28, Psalms 92:12-14
    </li>
    <li className="text-2xl text-black-700 leading-relaxed">
      <b>TRIUMPHANT VICTORY:</b> 1 John 4:4
    </li>
  </ul>
</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default OurHistory;
