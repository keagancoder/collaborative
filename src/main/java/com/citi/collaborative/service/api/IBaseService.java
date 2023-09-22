package com.citi.collaborative.service.api;


import com.citi.collaborative.common.InternalResponse;
import com.citi.collaborative.common.Ops;

public interface IBaseService<T> {

    InternalResponse<Void> saveMany(T... objs);

    InternalResponse<Void> updateMany(T... objs);

    InternalResponse<T> findAll(Ops<T> ops, Class<T> type);

    InternalResponse<T> findAll(Class<T> type);
}
