export interface MuscularGroup{
    id:number;
    title?:string;
    image?:string;
    description?:string;
    routine?:Array<{}>;
  }
  
  export interface CardProps{
    id?:string;
    title?:string;
    image?:string;
    description?:string;
}  

export interface DificulProp{
  name?:string;
  exercice?:Array<{}>;
}

export interface ExerciseGroup {
  muscle?: string;
  routines: {
    [name: string]: DificulProp[]; 
  };
}

export interface HombroBasicoProps {
  datos?: Array<DificulProp>;
}

export interface Exercice {
  name?: string;
  video?: string;
  series?: number;
  repetitions?: string;
  description?: string;
}

export interface ExercicePageProps {
  datos: ExerciseGroup;
}

export interface OptionName {
  opcion:string
}

//  optionMenu 

export interface structureJson {
        id: number
        image: string
        routine: Array<routineStrucuture>
        title: string
    }

    export interface routineStrucuture {
        name: string
        exercice: Array<exerciceStrucuture>
    }

    export interface exerciceStrucuture {
        description: string
        name: string
        repetitions: string
        series: number
        video: string
    }

    export interface itemsLocalStorage {
        muscle: string
        dificult: string
        exercice: string
        series: number
        repetitions: string
        weigth?: string | null
    }
