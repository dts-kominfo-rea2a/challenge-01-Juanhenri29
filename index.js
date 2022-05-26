// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = new Object();
const secondUser = new Object();

// Data Structure For First User
  // First User Education
  const firstEducation0 = {name: "SD 01", city: "Jakarta", graduate: "2016"};
  const firstEducation1 = {name: "SMP 02", city: "Jakarta", graduate: "2019"};
  const firstEducation2 = {name: "SMA 03", city: "Tangerang"};
  const firstEducation = [firstEducation0, firstEducation1, firstEducation2];

  // Push Data Ke FirstUser Map
  firstUser.name = "Monica";
  firstUser.gender = "Female";
  firstUser.age = "17";
  firstUser.email = "monica@dingdong.com";
  firstUser.favoriteColor = [...new Set(["Yellow", "Pink", "White", "Purple"])];
  firstUser.isHavePet = "Yes";
  firstUser.education = firstEducation;
  firstUser.favoriteRestaurant = [...new Set(["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"])];

// Data Structure For Second User
  // First User Education
  const secondEducation0 = {name: "SD 02", city: "Jakarta", graduate: "2010"};
  const secondEducation1 = {name: "SMP 03", city: "Bogor", graduate: "2013"};
  const secondEducation2 = {name: "SMA 01", city: "Surabaya", graduate: "2016"};
  const secondEducation3 = {name: "Universitas Maju", city: "Tangerang"};
  const secondEducation = [secondEducation0, secondEducation1, secondEducation2, secondEducation3];

  // Push Data Ke FirstUser Map
  secondUser.name = "Wendy";
  secondUser.gender = "Male";
  secondUser.age = "23";
  secondUser.email = "wendy@dingdong.com";
  secondUser.favoriteColor = [...new Set(["Blue", "Black", "Grey"])];
  secondUser.isHavePet = "No";
  secondUser.education = secondEducation;
  secondUser.favoriteRestaurant = [...new Set(["Tempura", "Bento", "Sushi", "Pancake", "Katsu", "Geprek", "Pancake", "Eggy"])];

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};
