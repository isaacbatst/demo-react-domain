import React from 'react';
import {type Attribute, Translator} from 't20-sheet-builder';

type Props = {
	attribute: Attribute;
	value: number;
	increment: () => void;
	decrement: () => void;
};

const AttributeInput: React.FC<Props> = ({attribute, value, decrement, increment}) => {
	const translatedAttribute = Translator.getAttributeTranslation(attribute);
	return (
		<div className='flex flex-col items-center'>
			<label htmlFor={attribute} id={`${attribute}-label`}>{translatedAttribute}</label>
			<div className='flex shadow-md rounded-l-full rounded-r-full'>
				<button aria-label={`Diminuir ${translatedAttribute}`} onClick={decrement} className='px-3 py-2 font-extralight text-2xl hover:bg-slate-50 active:bg-slate-100 rounded-l-full'>-</button>
				<input aria-labelledby={`${attribute}-label`} className='w-8 text-center text-sm bg-white' disabled type='number' id={attribute} value={value} />
				<button aria-label={`Aumentar ${translatedAttribute}`} onClick={increment} className='px-3 py-2 font-extralight text-2xl  hover:bg-slate-50 active:bg-slate-100 rounded-r-full' >+</button>
			</div>
		</div>
	);
};

export default AttributeInput;
