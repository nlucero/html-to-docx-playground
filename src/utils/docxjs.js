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

const exportToDocx = ({
  firstName,
  lastName,
  phoneNumber,
  city,
  state,
  zip,
} = {}) => {
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

export { exportToDocx };
