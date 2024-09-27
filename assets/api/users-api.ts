import {GetServerSideProps} from 'next';

export const getServerSidePropsUsers: GetServerSideProps = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        return {
            props: {
                users: data.results,
            },
        };
    } catch (error) {
        console.error("Error fetching users:", error);

        return {
            props: {
                users: [],
            },
        };
    }
};
