import {createRoot} from 'react-dom/client';

let root=document.getElementById('root');
createRoot(root).render(
    <table border="">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Alice</td>
                <td>28</td>
                <td>alice@example.com</td>
            </tr>
            <tr>
                <td>Bob</td>
                <td>34</td>
                <td>bob@example.com</td>
            </tr>
            <tr>
                <td>Charlie</td>
                <td>22</td>
                <td>charlie@example.com</td>
            </tr>
        </tbody>
    </table>
);