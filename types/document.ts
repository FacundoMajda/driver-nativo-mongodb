import { CreateCollectionOptions } from "mongodb";

export const esquema: CreateCollectionOptions = {
  validator: {
    $jsonSchema: {
      type: "object",
      properties: {
        nombres: {
          type: "array",
          items: {
            type: "string",
          },
        },
        apellidos: {
          type: "array",
          items: {
            type: "string",
          },
        },
        dni: { type: "string" },
        cuit: { type: "string" },
        telefono: {
          type: "array",
          items: {
            type: "string",
          },
        },
        email: {
          type: "array",
          items: {
            type: "string",
          },
        },
        CUE_anexo: { type: "string" },
        fecha_nacimiento: { type: "string" },
        genero: { type: "string" },
        estado_civil: {
          enum: ["Soltero", "Casado"],
        },
        nacionalidad: { type: "string" },
        domicilio: {
          oneOf: [
            { $ref: "esquemaDomicilio1" },
            { $ref: "esquemaDomicilio2" },
            { $ref: "esquemaDomicilio3" },
          ],
        },
        procedencia: {
          type: "object",
          properties: {
            pais: { type: "string" },
            provincia: { type: "string" },
            departamento: { type: "string" },
            localidad: { type: "string" },
          },
        },
      },
    },
  },
  validationLevel: "strict",
  validationAction: "error",
};

const esquemaDomicilio1: object = {
  $jsonSchema: {
    type: "object",
    properties: {
      tipo: { type: "string" },
      calle: { type: "string" },
      numero: { type: "number" },
      barrio: { type: "string" },
      torre: { type: "number" },
      piso: { type: "number" },
      departamento: { type: "string" },
      codigo_postal: { type: "number" },
    },
  },
};

const esquemaDomicilio2: object = {
  $jsonSchema: {
    type: "object",
    properties: {
      tipo: { type: "string" },
      calle: { type: "string" },
      numero: { type: "number" },
      barrio: { type: "string" },
      manzana: { type: "number" },
      lote: { type: "number" },
      casa: { type: "number" },
      codigo_postal: { type: "number" },
    },
  },
};

const esquemaDomicilio3: object = {
  $jsonSchema: {
    type: "object",
    properties: {
      tipo: { type: "string" },
      ruta: { type: "string" },
      km: { type: "number" },
      localidad: { type: "string" },
      codigo_postal: { type: "number" },
    },
  },
};

export interface Alumno {
  nombres: string[];
  apellidos: string[];
  dni: string;
  cuit: string;
  telefono: string[];
  email: string[];
  CUE_anexo: string;
  fecha_nacimiento: string;
  genero: string;
  estado_civil: string;
  nacionalidad: string;
  domicilio: esquemaDomicilio1 | esquemaDomicilio2 | esquemaDomicilio3;
  procedencia: {
    pais: string;
    provincia: string;
    departamento: string;
    localidad: string;
  };
}

interface esquemaDomicilio1 {
  tipo: string;
  calle: string;
  numero: number;
  barrio: string;
  torre?: number;
  piso?: number;
  departamento?: string | number;
  codigo_postal: number;
}

interface esquemaDomicilio2 {
  tipo: string;
  calle: string;
  numero: number;
  barrio: string;
  manzana: number;
  lote: number;
  casa: number;
  codigo_postal: number;
}

interface esquemaDomicilio3 {
  tipo: string;
  ruta: string;
  km: number;
  localidad: string;
  codigo_postal: number;
}
