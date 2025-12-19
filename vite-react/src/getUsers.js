export default async function Users() {
  try {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok){
    throw new Error(`Erreur HTTP : ${res.status}`);
  }
  const data = await res.json();
  return data;
  }
  catch (error) {
    console.error("Erreur lors du chargement des utilisateurs :", error);
    return [];
  }
}
