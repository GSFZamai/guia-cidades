export interface EstablishmentDTO {
    attributes: {
        activation_date?: string,
        active: boolean,
        establishment_name: string,
        registered_at: string,
        description: string,
    },
    id: string,
    meta: {
        created_at: string,
        updated_at: string
    }
}