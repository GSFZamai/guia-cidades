export interface DatoCMSBaseResponseDTO<T> {
    data: T[],
    meta: {
        total_count: 1
    }
}