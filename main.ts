import { MongoClient, Db, InsertOneResult } from "mongodb";
import { Alumno, esquema } from "./types/document";

async function main() {
  const URI: string = "mongodb://localhost:27017";
  const DATABASE: string = "alumnado";
  const COLLECTION: string = "alumnos";

  const client: MongoClient = await new MongoClient(URI).connect();

  const db: Db = client.db(DATABASE);

  //   const collection = db.collection(COLLECTION);

  db.createCollection(COLLECTION, esquema);
  const collection = db.collection(COLLECTION);

  const alumnoInsert: Alumno = {
    nombres: ["Valentina", "Sofía"],
    apellidos: ["Sánchez", "Gómez"],
    dni: "34258963",
    cuit: "27-34258963-4",
    telefono: ["3718 987654"],
    email: ["valentina.sanchez@ejemplo.com", "valesofi@gmail.com"],
    CUE_anexo: "3400_115_04",
    domicilio: {
      tipo: "Torre",
      calle: "Av. Libertad",
      numero: 1025,
      barrio: "B. Guadalupe",
      torre: 3,
      piso: 5,
      departamento: "5C",
      codigo_postal: 3600,
    },
    procedencia: {
      pais: "Argentina",
      provincia: "Formosa",
      departamento: "Formosa",
      localidad: "Formosa",
    },
    fecha_nacimiento: "14/02/1998",
    genero: "Femenino",
    estado_civil: "Soltera",
    nacionalidad: "Argentina",
  };

  // Crear un documento
  const nuevoAlumno: Alumno = alumnoInsert;

  const createResult: InsertOneResult<any> = await collection.insertOne(
    nuevoAlumno
  );
  console.log("Documento creado:", createResult.insertedId);

  //   //Leer un documento
  //   const id: object = { _id: "string" };
  //   const alumno: any = await collection.findOne(id);
  //   console.log("Documento encontrado:", alumno);

  //   // Leer documentos
  //   const alumnos: Array<any> = await collection.find().toArray();
  //   console.log("Documentos encontrados:", alumnos.length);
  //   //   alumnos.forEach((alumno) => console.log(alumno));

  //   // Actualizar un documento
  //   const filter: object = { name: "sring" };
  //   const update: object = { $set: { grade: "B" } };
  //   const updateResult: UpdateResult = await collection.updateOne(filter, update);
  //   console.log("Documentos actualizados:", updateResult);

  //   // Eliminar un documento
  //   const deleteResult: DeleteResult = await collection.deleteOne(filter);
  //Eliminar varios
  // const deleteResult: DeleteResult = await collection.deleteMany(filter);
  //   console.log("Documentos eliminados:", deleteResult.deletedCount);

  // Cerrar la conexión
  await client.close();
}
main();
