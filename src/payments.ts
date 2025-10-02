type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "albert.einstein@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "marie.curie@example.com",
  },
  {
    id: "3c2f1e4a",
    amount: 200,
    status: "success",
    email: "isaac.newton@example.com",
  },
  {
    id: "9a8b7c6d",
    amount: 75,
    status: "failed",
    email: "nikola.tesla@example.com",
  },
  {
    id: "5e4f3a2b",
    amount: 150,
    status: "pending",
    email: "ada.lovelace@example.com",
  },
  {
    id: "a1b2c3d4",
    amount: 90,
    status: "success",
    email: "leonardo.davinci@example.com",
  },
  {
    id: "e7f8g9h0",
    amount: 210,
    status: "processing",
    email: "galileo.galilei@example.com",
  },
  {
    id: "12ab34cd",
    amount: 300,
    status: "failed",
    email: "charles.darwin@example.com",
  },
  {
    id: "56ef78gh",
    amount: 85,
    status: "pending",
    email: "stephen.hawking@example.com",
  },
  {
    id: "90ij12kl",
    amount: 450,
    status: "success",
    email: "sigmund.freud@example.com",
  },
  {
    id: "34mn56op",
    amount: 60,
    status: "processing",
    email: "martin.lutherking@example.com",
  },
  {
    id: "78qr90st",
    amount: 175,
    status: "pending",
    email: "nelson.mandela@example.com",
  },
  {
    id: "uv12wx34",
    amount: 220,
    status: "success",
    email: "mahatma.gandhi@example.com",
  },
  {
    id: "yz56ab78",
    amount: 95,
    status: "failed",
    email: "winston.churchill@example.com",
  },
  {
    id: "cd90ef12",
    amount: 130,
    status: "pending",
    email: "abraham.lincoln@example.com",
  },
  {
    id: "gh34ij56",
    amount: 275,
    status: "processing",
    email: "george.washington@example.com",
  },
  {
    id: "kl78mn90",
    amount: 320,
    status: "success",
    email: "benjamin.franklin@example.com",
  },
  {
    id: "op12qr34",
    amount: 140,
    status: "failed",
    email: "thomas.jefferson@example.com",
  },
  {
    id: "st56uv78",
    amount: 110,
    status: "pending",
    email: "theodore.roosevelt@example.com",
  },
  {
    id: "wx90yz12",
    amount: 185,
    status: "success",
    email: "john.kennedy@example.com",
  },
  {
    id: "34ab56cd",
    amount: 205,
    status: "processing",
    email: "barack.obama@example.com",
  },
  {
    id: "78ef90gh",
    amount: 155,
    status: "failed",
    email: "elon.musk@example.com",
  },
  {
    id: "12ij34kl",
    amount: 400,
    status: "pending",
    email: "bill.gates@example.com",
  },
  {
    id: "56mn78op",
    amount: 270,
    status: "success",
    email: "steve.jobs@example.com",
  },
  {
    id: "90qr12st",
    amount: 310,
    status: "processing",
    email: "mark.zuckerberg@example.com",
  },
  {
    id: "uv34wx56",
    amount: 95,
    status: "failed",
    email: "jeff.bezos@example.com",
  },
  {
    id: "yz78ab90",
    amount: 125,
    status: "pending",
    email: "oprah.winfrey@example.com",
  },
  {
    id: "cd12ef34",
    amount: 350,
    status: "success",
    email: "michael.jackson@example.com",
  },
  {
    id: "gh56ij78",
    amount: 220,
    status: "processing",
    email: "madonna@example.com",
  },
  {
    id: "kl90mn12",
    amount: 175,
    status: "failed",
    email: "prince@example.com",
  },
];
