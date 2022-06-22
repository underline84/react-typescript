import style from './Lista.module.scss';
import Item from './Item/index';
import {Itarefa} from '../../types/tarefa';


function Lista({tarefas}: {tarefas: Itarefa[]}) {
    
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                    key={index}
                        {...item}
                    />
                ))}                
            </ul>
        </aside>
    )
}

export default Lista;
