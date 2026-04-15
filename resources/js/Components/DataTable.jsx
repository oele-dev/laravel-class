import { Link } from '@inertiajs/react';

export default function DataTable({ columns, data, actions, emptyMessage, createUrl, createText }) {
    return (
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-medium text-gray-900">List</h3>
                    {createUrl && (
                        <Link
                            href={createUrl}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            {createText || 'Add New'}
                        </Link>
                    )}
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {columns.map((column, index) => (
                                    <th
                                        key={index}
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        {column.label}
                                    </th>
                                ))}
                                {actions && (
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                )}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {data.length > 0 ? (
                                data.map((item, index) => (
                                    <tr key={index}>
                                        {columns.map((column, colIndex) => (
                                            <td
                                                key={colIndex}
                                                className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                            >
                                                {column.render ? column.render(item) : item[column.key]}
                                            </td>
                                        ))}
                                        {actions && (
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                {actions(item)}
                                            </td>
                                        )}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={columns.length + (actions ? 1 : 0)}
                                        className="px-6 py-4 text-center text-gray-500"
                                    >
                                        {emptyMessage || 'No items found.'}
                                        {createUrl && (
                                            <Link href={createUrl} className="text-blue-500 hover:text-blue-700 ml-2">
                                                Create one now
                                            </Link>
                                        )}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination would go here if needed */}
            </div>
        </div>
    );
}