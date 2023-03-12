import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { EstablishmentCard } from "./components/establishmentCard";
import { EstablishmentDTO } from "./dtos/models/EstablishmentDTO";
import { DatoCMSBaseResponseDTO } from "./dtos/responses/DatoCMSBaseResponseDTO";
import { datoAPI } from "./services/datoAPI";

function App() {
  const [establishments, setEstablishment] = useState<EstablishmentDTO[]>();

  async function getEstablishments() {
    const response = await datoAPI.get<DatoCMSBaseResponseDTO<EstablishmentDTO>>("/items");
    /* const response = await datoAPI.post("", JSON.stringify({
      "query": `{ estabelecimento { establishmentName } }`
    })); */

    if (response.data.meta.total_count <= 0) {
      alert("Nenhum registro encontrado!");
    } else {
      setEstablishment(response.data.data)
    }

  }

  useEffect(() => { getEstablishments() }, [])

  return (
    <Container>
      {
        establishments?.map(establishment => {
          return (
            <EstablishmentCard
              establishment={establishment}
              key={establishment.id}
            />
          )
        })
      }
    </Container>
  );
}

export default App;
