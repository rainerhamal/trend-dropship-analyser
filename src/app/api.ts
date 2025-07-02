export const runAnanlysis = async (keyword: string) => {
    const res = await fetch('${process.env.NEXT_PUBLIC_API_URL}/analyze', {method: 'POST',
    });

    return res.json();
};