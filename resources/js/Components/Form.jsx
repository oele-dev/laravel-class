import { useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Form({ fields, submitUrl, method = 'post', submitText = 'Submit', onSuccess }) {
    const { data, setData, post, put, processing, errors, reset } = useForm(
        fields.reduce((acc, field) => ({ ...acc, [field.name]: field.value || '' }), {})
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        if (method === 'put') {
            put(submitUrl, {
                onSuccess: () => {
                    reset();
                    if (onSuccess) onSuccess();
                },
            });
        } else {
            post(submitUrl, {
                onSuccess: () => {
                    reset();
                    if (onSuccess) onSuccess();
                },
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {fields.map((field) => (
                <div key={field.name}>
                    <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                        {field.label}
                    </label>
                    <div className="mt-1">
                        {field.type === 'select' ? (
                            <select
                                id={field.name}
                                name={field.name}
                                value={data[field.name]}
                                onChange={(e) => setData(field.name, e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            >
                                {field.options?.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        ) : (
                            <input
                                type={field.type || 'text'}
                                id={field.name}
                                name={field.name}
                                value={data[field.name]}
                                onChange={(e) => setData(field.name, e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        )}
                    </div>
                    {errors[field.name] && (
                        <p className="mt-2 text-sm text-red-600">{errors[field.name]}</p>
                    )}
                </div>
            ))}

            <div className="flex items-center justify-end">
                <button
                    type="submit"
                    disabled={processing}
                    className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50"
                >
                    {submitText}
                </button>
            </div>
        </form>
    );
}