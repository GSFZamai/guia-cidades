import { Text, Box, Card, CardHeader, Flex, Heading, CardBody, CardFooter, Button } from "@chakra-ui/react";
import { EstablishmentDTO } from "../../dtos/models/EstablishmentDTO";

interface EstablishmentCardProps {
    establishment: EstablishmentDTO
}

export function EstablishmentCard({ establishment }: EstablishmentCardProps) {
    return (
        <Card maxW='md'>
            <CardHeader>
                <Flex /* spacing='4' */>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Box>
                            <Heading size='sm'>{establishment.attributes.establishment_name}</Heading>
                            <Text>{new Date(establishment.meta.created_at).toLocaleDateString("pt-BR")}</Text>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            {<CardBody>
                <Text>
                    {establishment.attributes.description}
                </Text>
            </CardBody>}
            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                    '& > button': {
                        minW: '136px',
                    },
                }}
            >
                <Button flex='1' variant='ghost' /* leftIcon={<BiLike />} */>
                    Whatsapp
                </Button>
                <Button flex='1' variant='ghost' /* leftIcon={<BiChat />} */>
                    Email
                </Button>
                <Button flex='1' variant='ghost' /* leftIcon={<BiShare />} */>
                    Compartilhar
                </Button>
            </CardFooter>
        </Card>
    )
}