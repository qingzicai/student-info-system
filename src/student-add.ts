import {createClient} from '@supabase/supabase-js';
import { SUPABASE_API_URL, SUPABASE_KEY } from './src/config/private-keys.js';

const supabaseUrl = SUPABASE_API_URL || process.env.SUPABASE_API_URL;
const supabaseKey = SUPABASE_KEY || process.env.SUPABASE_API_URL;
const supabase = createClient(supabaseUrl, supabaseKey );

const fullNameEl: HTMLElement | null = document.querySelector('#full-name');
const classEl: HTMLElement | null = document.querySelector('#class');
const ageEl: HTMLElement | null = document.querySelector('#age');
const parentEl: HTMLElement | null = document.querySelector('#parent');
const contactInfoEl: HTMLElement | null = document.querySelector('#contact-info');
const addressEl: HTMLElement | null = document.querySelector('#address');
const newStudentFormEl: HTMLElement | null = document.querySelector('#new-student-form');
const messageEl: HTMLElement | null = document.querySelector('#student-added-message');

newStudentFormEl?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const student = {
        fullName: fullNameEl?.value,
        class: classEl?.value,
        age: ageEl?.value,
        parent: parentEl?.value,
        contactInfo: contactInfoEl?.value,
        address: addressEl?.value,
    }

    const newStudent = await addStudent(student);

    resetInput()
})

function resetInput(focusElement = fullNameEl) {

    document
        .querySelectorAll('.can-reset')
        .forEach(input => input.value = '')

    focusElement?.focus()
}
function showMessage(studentObject: {
        id: number,
        fullName: string,
        class: number,
        }) {
    messageEl.innerHTML = `New student ${studentObject.id} ${studentObject.fullName} class ${studentObject.class} added to the database.`
}

async function addStudent(
        student:{
        fullName: string,
        age: number,
        class: number,
        parent: string,
        contactInfo: number,
        address: string,
        }):Object {

     const {data, error} = await supabase
        .from('student')
        .insert([
            {fullName:student.fullName, age:student.age, class:student.class, parent: student.parent, contact_info: student.contactInfo, address: student.address},
        ])
        .select()

     return data[0];

}

