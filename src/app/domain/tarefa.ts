export class Tarefa {
    private titulo: string;
    private descricao: string;
    private responsavel: string;
    private dataInicio: Date;

    public getDataInicio(): Date {
        return this.dataInicio;
    }

    public setDataInicio(dataInicio: Date): void {
        this.dataInicio = dataInicio;
    }

    private status: number;
    private id: string;

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public getResponsavel(): string {
        return this.responsavel;
    }

    public setResponsavel(responsavel: string): void {
        this.responsavel = responsavel;
    }

    public getStatus(): number {
        return this.status;
    }

    public setStatus(status: number): void {
        this.status = status;
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    

    

	constructor(titulo: string,
        descricao: string,
        responsavel: string,
        dataInicio: Date,
        status: number) {
            this.titulo = titulo;
            this.descricao = descricao;
            this.responsavel =responsavel;
            this.dataInicio = dataInicio;
            this.status = status;
	}


}
