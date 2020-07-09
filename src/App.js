import React, { useState } from "react";
import {
  Packer,
  Document,
  Paragraph,
  TextRun,
  UnderlineType,
  AlignmentType,
  HeadingLevel,
  RunFonts,
} from "docx";
import { saveAs } from "file-saver";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("New Mexico");
  const [zip, setZip] = useState("");

  const exportToDocx = () => {
    const doc = new Document();

    doc.addSection({
      properties: {},
      children: [
        new Paragraph({
          children: [
            new TextRun({
              text: "First Name",
              bold: true,
              font: { name: "Calibri" },
              size: 26,
            }),
            new TextRun(`\t${firstName}`),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Last Name",
              bold: true,
              font: { name: "Calibri" },
              size: 26,
            }),
            new TextRun(`\t${lastName}`),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Phone Number",
              bold: true,
              font: { name: "Calibri" },
              size: 26,
            }),
            new TextRun(`\t${phoneNumber}`),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "City",
              bold: true,
              font: { name: "Calibri" },
              size: 26,
            }),
            new TextRun(`\t${city}`),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "State",
              bold: true,
              font: { name: "Calibri" },
              size: 26,
            }),
            new TextRun(`\t${state}`),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Zip",
              bold: true,
              font: { name: "Calibri" },
              size: 26,
            }),
            new TextRun(`\t${zip}`),
          ],
        }),
      ],
    });

    Packer.toBlob(doc)
      .then((blob) => {
        console.log(blob);
        saveAs(blob, "example.docx");
        console.log("Document created successfully");
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <div className="container mx-auto flex justify-center mt-16">
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                value={firstName}
                onChange={(e) => setFirstName(e.currentTarget.value)}
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.currentTarget.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Phone Number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.currentTarget.value)}
              />
              <p className="text-gray-600 text-xs italic">
                Make it as long and as crazy as you'd like
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                City
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="Albuquerque"
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                State
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  value={state}
                  onChange={(e) => setState(e.currentTarget.value)}
                >
                  <option value="Missouri">Missouri</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="Texas">Texas</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Zip
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="90210"
                value={zip}
                onChange={(e) => setZip(e.currentTarget.value)}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="container mx-auto flex justify-center mt-16">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={exportToDocx}
        >
          Export to .docx
        </button>
      </div>
    </>
  );
}

export default App;
